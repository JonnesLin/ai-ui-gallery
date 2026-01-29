import { useState } from 'react';
import { Modal, ModalHeader, ModalContent, ModalFooter } from './index';

export default function CorporateModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-8">
      <button
        onClick={() => setIsOpen(true)}
        className="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 rounded hover:bg-blue-800 transition-colors"
      >
        Open Modal
      </button>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        theme="corporate"
        size="lg"
        closeOnOverlayClick
        closeOnEsc
        centered
      >
        <div className="bg-white rounded-lg shadow-xl">
          <div className="px-6 py-4 border-b border-slate-200">
            <ModalHeader theme="corporate" onClose={() => setIsOpen(false)}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h2 className="text-lg font-semibold text-slate-800">Document Review</h2>
              </div>
            </ModalHeader>
          </div>

          <ModalContent theme="corporate">
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <div>
                  <p className="text-sm font-medium text-amber-800">Action Required</p>
                  <p className="text-sm text-amber-700 mt-1">
                    Please review the following document before proceeding with the approval process.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-800 truncate">
                    Q4_Financial_Report_2024.pdf
                  </p>
                  <p className="text-xs text-slate-500">2.4 MB - Last modified: Jan 15, 2024</p>
                </div>
                <button className="text-blue-700 hover:text-blue-800 text-sm font-medium">
                  View
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-slate-500">Submitted by</p>
                  <p className="font-medium text-slate-800">John Anderson</p>
                </div>
                <div>
                  <p className="text-slate-500">Department</p>
                  <p className="font-medium text-slate-800">Finance</p>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Comments (optional)
              </label>
              <textarea
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                rows={3}
                placeholder="Add your review comments..."
              />
            </div>
          </ModalContent>

          <ModalFooter theme="corporate">
            <div className="w-full px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-3 -mx-6 -mb-6">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded hover:bg-red-700 transition-colors"
              >
                Reject
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded hover:bg-blue-800 transition-colors"
              >
                Approve
              </button>
            </div>
          </ModalFooter>
        </div>
      </Modal>
    </div>
  );
}
