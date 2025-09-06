'use client';

import { useState, useRef } from 'react';
import { PhotoValidator, ValidationResult } from '../lib/validator';
import { getRequirements, PhotoRequirements } from '../lib/requirements';

export default function PhotoUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [validation, setValidation] = useState<ValidationResult | null>(null);
  const [requirements, setRequirements] = useState<PhotoRequirements | null>(null);
  const [country, setCountry] = useState('US');
  const [docType, setDocType] = useState('PASSPORT');
  const [loading, setLoading] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const validator = new PhotoValidator();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreview(url);
      validatePhoto(file);
    }
  };

  const validatePhoto = async (file: File) => {
    setLoading(true);
    const reqs = getRequirements(country, docType);
    if (!reqs) {
      setValidation({
        isValid: false,
        errors: ['Requirements not found for selected country/document type'],
        warnings: [],
        faceDetected: false,
        fileSize: file.size,
        dimensions: { width: 0, height: 0 }
      });
      setLoading(false);
      return;
    }

    setRequirements(reqs);
    const result = await validator.validatePhoto(file, reqs);
    setValidation(result);
    setLoading(false);
  };

  const handleCountryChange = (newCountry: string, newDocType: string) => {
    setCountry(newCountry);
    setDocType(newDocType);
    if (selectedFile) {
      validatePhoto(selectedFile);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">ClearPass - Passport Photo Validator</h1>
      
      {/* Country/Document Selection */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Select Document Type</h2>
        <div className="grid grid-cols-2 gap-4">
          <select 
            value={country} 
            onChange={(e) => handleCountryChange(e.target.value, docType)}
            className="p-2 border rounded"
          >
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="INDIA">India</option>
          </select>
          <select 
            value={docType} 
            onChange={(e) => handleCountryChange(country, e.target.value)}
            className="p-2 border rounded"
          >
            <option value="PASSPORT">Passport</option>
            <option value="VISA">Visa</option>
          </select>
        </div>
      </div>

      {/* Requirements Display */}
      {requirements && (
        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold mb-2">Requirements for {requirements.country} {requirements.documentType}</h3>
          <ul className="text-sm space-y-1">
            <li>Dimensions: {requirements.pixelWidth} × {requirements.pixelHeight} pixels</li>
            <li>Max file size: {requirements.maxFileSizeKB}KB</li>
            <li>Background: {requirements.backgroundColor}</li>
            <li>Head height: {requirements.headHeightRatio.min * 100}% - {requirements.headHeightRatio.max * 100}% of image</li>
          </ul>
        </div>
      )}

      {/* File Upload */}
      <div className="mb-6">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          className="w-full p-8 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 transition-colors"
        >
          {preview ? 'Change Photo' : 'Upload Photo'}
        </button>
      </div>

      {/* Preview and Validation */}
      {preview && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Photo Preview */}
          <div>
            <h3 className="font-semibold mb-2">Photo Preview</h3>
            <img src={preview} alt="Preview" className="w-full max-w-sm border rounded" />
          </div>

          {/* Validation Results */}
          <div>
            <h3 className="font-semibold mb-2">Validation Results</h3>
            {loading ? (
              <div className="p-4 bg-gray-100 rounded">Validating...</div>
            ) : validation ? (
              <div className={`p-4 rounded ${validation.isValid ? 'bg-green-100' : 'bg-red-100'}`}>
                <div className="font-semibold mb-2">
                  {validation.isValid ? '✅ Photo Compliant' : '❌ Photo Non-Compliant'}
                </div>
                
                {validation.errors.length > 0 && (
                  <div className="mb-3">
                    <div className="font-medium text-red-700">Errors:</div>
                    <ul className="text-sm text-red-600 list-disc list-inside">
                      {validation.errors.map((error, i) => (
                        <li key={i}>{error}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {validation.warnings.length > 0 && (
                  <div className="mb-3">
                    <div className="font-medium text-yellow-700">Warnings:</div>
                    <ul className="text-sm text-yellow-600 list-disc list-inside">
                      {validation.warnings.map((warning, i) => (
                        <li key={i}>{warning}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="text-sm text-gray-600 mt-3">
                  <div>File size: {Math.round(validation.fileSize / 1024)}KB</div>
                  <div>Dimensions: {validation.dimensions.width} × {validation.dimensions.height}</div>
                  <div>Face detected: {validation.faceDetected ? 'Yes' : 'No'}</div>
                  {validation.backgroundColor && (
                    <div>Background: {validation.backgroundColor}</div>
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      {validation?.isValid && (
        <div className="mt-6 flex gap-4">
          <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Download Compliant Photo
          </button>
          <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Generate Print Sheet
          </button>
        </div>
      )}
    </div>
  );
}
