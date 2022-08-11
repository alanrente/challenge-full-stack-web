import { notification } from "antd";

export function useNotification() {
  type NotificationType = 'success' | 'info' | 'warning' | 'error';

  function openNotificationWithIcon(type: NotificationType, message: string, description?: string) {
    return notification[type]({
      message: message,
      description:
        description,
    });
  };

  return {openNotificationWithIcon}
}