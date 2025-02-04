import React, { useEffect, useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import { Download, AlertCircle } from 'lucide-react';

// Import worker directly from node_modules
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';

// Configure worker
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

interface PDFPreviewProps {
  pdfUrl: string;
  onDownload: () => void;
}

export default function PDFPreview({ pdfUrl, onDownload }: PDFPreviewProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPDF = async () => {
      try {
        setIsLoading(true);
        setError(null);

        if (!pdfUrl) {
          throw new Error('PDF URL is not provided');
        }

        // Load the PDF document
        const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
        const page = await pdf.getPage(1);
        
        if (!canvasRef.current) return;

        // Create and configure canvas
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        if (!context) throw new Error('Canvas context not available');

        // Calculate dimensions
        const containerWidth = canvasRef.current.clientWidth;
        const viewport = page.getViewport({ scale: 1 });
        const scale = containerWidth / viewport.width;
        const scaledViewport = page.getViewport({ scale });

        canvas.height = scaledViewport.height;
        canvas.width = scaledViewport.width;

        // Clear previous content
        while (canvasRef.current.firstChild) {
          canvasRef.current.removeChild(canvasRef.current.firstChild);
        }
        canvasRef.current.appendChild(canvas);

        // Render PDF page
        await page.render({
          canvasContext: context,
          viewport: scaledViewport,
        }).promise;

      } catch (err) {
        console.error('Error loading PDF:', err);
        setError('Unable to load PDF preview. Please try downloading the full PDF instead.');
      } finally {
        setIsLoading(false);
      }
    };

    loadPDF();
  }, [pdfUrl]);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Preview Header */}
      <div className="bg-[#064635] text-white px-6 py-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold">PDF Preview</h3>
        <button
          onClick={onDownload}
          className="flex items-center space-x-2 bg-[#D4AF37] text-[#064635] px-4 py-2 rounded-lg 
                   hover:bg-opacity-90 transition font-medium"
        >
          <Download className="h-4 w-4" />
          <span>Download Full PDF</span>
        </button>
      </div>

      {/* Preview Content */}
      <div className="p-6">
        {isLoading ? (
          <div className="flex justify-center items-center h-96">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#D4AF37] border-t-transparent"></div>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center h-96 text-center px-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-center justify-center mb-4">
                <AlertCircle className="h-8 w-8 text-red-500 mr-2" />
                <p className="text-red-600">{error}</p>
              </div>
              <button
                onClick={onDownload}
                className="inline-flex items-center space-x-2 bg-[#064635] text-white px-6 py-3 rounded-lg 
                         hover:bg-opacity-90 transition font-medium"
              >
                <Download className="h-5 w-5" />
                <span>Download Full PDF</span>
              </button>
            </div>
          </div>
        ) : (
          <div 
            ref={canvasRef}
            className="min-h-[600px] flex justify-center items-center bg-gray-50 rounded-lg"
          />
        )}
      </div>
    </div>
  );
}