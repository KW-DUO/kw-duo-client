import { useTranslation } from 'react-i18next';

type ConfirmationModalProps = {
  isOpen: boolean;
  title: string;
  message: string;
  onClose: () => void;
  onConfirm: () => void;
};

const ConfirmationModal = ({
  isOpen,
  title,
  message,
  onClose,
  onConfirm,
}: ConfirmationModalProps) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="mb-4">{message}</p>
        <div className="flex justify-around gap-2">
          <button className="px-4 py-2 bg-gray-200 rounded border-2" onClick={onClose}>
            {t('editToolbar.cancel')}
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={onConfirm}>
            {t('editToolbar.confirm')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
