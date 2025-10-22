"use client";

import { useState } from 'react';

export default function Home() {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [adCopy, setAdCopy] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const generateAd = async () => {
    setLoading(true);
    // In a real app, you would make an API call to an AI service here.
    // For this example, we'll just generate some mock data.
    setAdCopy(`Introducing ${productName}! ${productDescription}. Perfect for ${targetAudience}.`);
    setImageUrl(`https://picsum.photos/seed/${encodeURIComponent(productName)}/512/512`);
    setLoading(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-gray-100">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">AI Ad Generator</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">Ad Details</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="productName" className="block text-sm font-medium text-gray-600 mb-1">Product/Service Name</label>
                <input
                  type="text"
                  id="productName"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., 'Smartwatch Pro'"
                />
              </div>
              <div>
                <label htmlFor="productDescription" className="block text-sm font-medium text-gray-600 mb-1">Product/Service Description</label>
                <textarea
                  id="productDescription"
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., 'A stylish smartwatch with advanced health tracking features.'"
                />
              </div>
              <div>
                <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-600 mb-1">Target Audience</label>
                <input
                  type="text"
                  id="targetAudience"
                  value={targetAudience}
                  onChange={(e) => setTargetAudience(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., 'Fitness enthusiasts and tech-savvy professionals'"
                />
              </div>
            </div>
            <button
              onClick={generateAd}
              disabled={loading || !productName || !productDescription || !targetAudience}
              className="w-full mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-300"
            >
              {loading ? 'Generating...' : 'Generate Ad'}
            </button>
          </div>

          {/* Ad Preview Section */}
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">Ad Preview</h2>
            {imageUrl && adCopy ? (
              <div className="w-full max-w-sm mx-auto">
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={imageUrl} alt="Generated Ad" className="w-full h-auto object-cover" />
                  <div className="p-4">
                    <p className="text-gray-800">{adCopy}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500">
                Your generated ad will appear here.
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
