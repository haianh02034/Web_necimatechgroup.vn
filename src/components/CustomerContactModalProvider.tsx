import React, { createContext, useContext, useState, ReactNode } from 'react';
import { X } from 'lucide-react';
import { CustomerContactSection } from './CustomerContactSection';

interface CustomerContactModalContextType {
  openModal: () => void;
  closeModal: () => void;
  isOpen: boolean;
}

const CustomerContactModalContext = createContext<CustomerContactModalContextType | undefined>(undefined);

export const useCustomerContactModal = () => {
  const context = useContext(CustomerContactModalContext);
  if (context === undefined) {
    throw new Error('useCustomerContactModal must be used within a CustomerContactModalProvider');
  }
  return context;
};

interface CustomerContactModalProviderProps {
  children: ReactNode;
}

export function CustomerContactModalProvider({ children }: CustomerContactModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleFormSubmitted = () => {
    closeModal();
  };

  return (
    <CustomerContactModalContext.Provider value={{ openModal, closeModal, isOpen }}>
      {children}

      {/* Modal */}
      {isOpen && (
        <>
          {/* Backdrop - Click to close */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            style={{ zIndex: 100 }}
            onClick={closeModal}
          />

          {/* Modal Box - Prevent backdrop clicks */}
          <div
            className="fixed inset-0 flex items-center justify-center"
            style={{ zIndex: 101 }}
            onClick={(e) => {
              // Only close if clicked directly on this container (not bubbled from modal)
              if (e.target === e.currentTarget) {
                closeModal();
              }
            }}
          >
            <div
              className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full mx-4 max-h-[90vh] animate-modalFadeIn relative overflow-hidden transition-all duration-300 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] hover:scale-[1.02]"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-0 bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-full p-3 transition-all duration-300 hover:scale-125 shadow-xl border-2 border-white/20 backdrop-blur-sm animate-pulse"
                style={{ zIndex: 10 }}
              >
                <X className="w-6 h-6 text-white drop-shadow-sm" />
              </button>

              {/* Modal Content */}
              <div
                className="overflow-y-auto max-h-[85vh] p-8 animate-modalContentReveal"
                style={{
                  animation: 'modalContentReveal 0.5s ease-out 0.2s both'
                }}
              >
                <CustomerContactSection onSubmitted={handleFormSubmitted} />
              </div>
            </div>
          </div>
        </>
      )}

      <style>
        {`
          @keyframes modalFadeIn {
            from {
              opacity: 0;
              transform: scale(0.9) translateY(-20px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }

          @keyframes modalContentReveal {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes modalFadeOut {
            from {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
            to {
              opacity: 0;
              transform: scale(0.9) translateY(-20px);
            }
          }

          .animate-modalFadeIn {
            animation: modalFadeIn 0.3s ease-out;
          }
        `}
        </style>
    </CustomerContactModalContext.Provider>
  );
}
