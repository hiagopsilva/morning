import { moderateScale, showMessage } from "~/utils/modules";

type Props = {
  open?: boolean;
  title?: string;
  position?: PositionAlertMessage;
  autoHide?: boolean;
  type?: AlertMessageType;
  description?: string;
  onPress?(): void;
  onLongPress?(): void;
  duration?: number;
  icon?: MessageTypeIcon;
  floating?: boolean;
  hideOnPress?: boolean;
};

export default ({
  duration = 8000,
  position = "top",
  autoHide = true,
  type = "success",
  title = "",
  description = "",
  onPress,
  onLongPress,
  icon,
  floating,
  hideOnPress = true,
}: Props): void => {
  showMessage({
    hideOnPress,
    floating,
    icon,
    duration,
    onPress,
    onLongPress,
    position,
    autoHide,
    description,
    type,
    message: title,
    hideStatusBar: false,
    animated: false,
    statusBarHeight: moderateScale(30),
  });
};
