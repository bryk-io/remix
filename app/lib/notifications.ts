/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from '~/components/ui/sonner';

export type NotificationStyle =
  | 'message'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'action'
  | 'promise';

interface AsyncOperation {
  // the async task to monitor
  promise: Promise<any>;
  // executed/shown when the operation fails.
  error?: string | ((data: any) => string);
  // executed/shown when the operation completes.
  success?: string | ((data: any) => string);
  // shown while waiting for the operation to resolve.
  loading?: string;
}

export interface NotificationOptions {
  // concise message; usually a single short line.
  message: string;
  // complementary information, displayed as an optional 2nd line of text.
  description?: string;
  // show a close button allowing to manually remove the message.
  dismissible?: boolean;
  // show then notification using a rich color scheme.
  useColors?: boolean;
  // if not provided, 'message' is used by default.
  style?: NotificationStyle;
  // used on `action` messages as the button label. If not provided `Dismiss`
  // is used by default.
  actionLabel?: string;
  // used on `action` messages.
  onClick?: () => void;
  // used to monitor and notify about async operations.
  task?: AsyncOperation;
}

// Utility method to dispatch "toast" notifications.
export function notify(nOpts: NotificationOptions) {
  const details = {
    richColors: nOpts.useColors,
    dismissible: nOpts.dismissible,
    closeButton: nOpts.dismissible,
    description: nOpts.description || '',
  };
  switch (nOpts.style || 'message') {
    case 'message':
      toast.message(nOpts.message, details);
      break;
    case 'info':
      toast.info(nOpts.message, details);
      break;
    case 'success':
      toast.success(nOpts.message, details);
      break;
    case 'warning':
      toast.warning(nOpts.message, details);
      break;
    case 'error':
      toast.error(nOpts.message, details);
      break;
    case 'action':
      toast(nOpts.message, {
        description: details.description,
        richColors: details.richColors,
        dismissible: details.dismissible,
        closeButton: details.dismissible,
        action: {
          label: nOpts.actionLabel || 'Dismiss',
          onClick: () => {
            if (nOpts.onClick) {
              nOpts.onClick();
            }
          },
        },
      });
      break;
    case 'promise':
      if (!nOpts.task) {
        break;
      }
      toast.promise(nOpts.task.promise, {
        description: details.description,
        dismissible: details.dismissible,
        closeButton: details.dismissible,
        richColors: details.richColors,
        loading: nOpts.task.loading || 'Loading...',
        error: nOpts.task.error || 'Operation failed.',
        success: nOpts.task.success || 'Operation completed.',
      });
      break;
  }
}
