import { useState } from 'react';
import { Modal, ModalHeader, ModalContent, ModalFooter } from './index';

export default function MaterialModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-2.5 text-sm font-medium uppercase tracking-wider text-white bg-indigo-600 rounded shadow-md hover:bg-indigo-700 hover:shadow-lg active:shadow-sm transition-all"
        style={{
          boxShadow:
            '0 3px 1px -2px rgba(0,0,0,0.2), 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12)',
        }}
      >
        Open Modal
      </button>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        theme="material"
        size="md"
        closeOnOverlayClick
        closeOnEsc
        centered
      >
        <div
          className="bg-white rounded-lg overflow-hidden"
          style={{
            boxShadow:
              '0 11px 15px -7px rgba(0,0,0,0.2), 0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12)',
          }}
        >
          <ModalHeader theme="material">
            <div className="px-6 pt-6 pb-4">
              <h2 className="text-xl font-medium text-gray-900 mb-1">Discard draft?</h2>
              <p className="text-sm text-gray-500">
                This action cannot be undone and your draft will be permanently deleted.
              </p>
            </div>
          </ModalHeader>

          <ModalContent theme="material">
            <div
              className="bg-gray-50 rounded-lg p-4 border border-gray-200"
              style={{
                boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.08)',
              }}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-indigo-600"
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
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">Project_Proposal_v2.doc</p>
                  <p className="text-xs text-gray-500 mt-0.5">Last edited 2 hours ago</p>
                </div>
              </div>
            </div>

            <div
              className="h-px bg-gray-200 my-6"
              style={{
                boxShadow: '0 1px 0 rgba(255,255,255,0.5)',
              }}
            />
          </ModalContent>

          <ModalFooter theme="material">
            <div className="w-full px-6 py-4 flex justify-end gap-2 -mx-6 -mb-6">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-sm font-medium uppercase tracking-wider text-indigo-600 rounded hover:bg-indigo-50 active:bg-indigo-100 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-sm font-medium uppercase tracking-wider text-white bg-indigo-600 rounded shadow hover:bg-indigo-700 active:bg-indigo-800 hover:shadow-md active:shadow-sm transition-all"
                style={{
                  boxShadow:
                    '0 3px 1px -2px rgba(0,0,0,0.2), 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12)',
                }}
              >
                Discard
              </button>
            </div>
          </ModalFooter>
        </div>
      </Modal>
    </div>
  );
}
