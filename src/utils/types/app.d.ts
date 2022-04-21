declare type StatusBarStyleType = 'light-content' | 'dark-content';

declare type AppNavigationType = {
  route: string;
};

declare type Unknown = Record<string, any>;

declare type FileType = {
  uri: string;
  type: string;
  fileName?: string;
};

declare type ImagePickerOptionsType = ImagePickerType;

declare type ModalType = {
  visible: boolean;
  title: string;
  description?: string;
  onCancel?: () => void;
  onNext?: () => void;
  onCancelText?: string;
  onNextText?: string;
  primary?: boolean;
  children?: React.ComponentElement;
};

declare type GenericResponseAPIType = {
  code: string;
};

declare type CallBackType = {
  code?: string;
};

declare type ModalActionType = {
  code?: string;
  onNext?: (args?: Unknown) => void;
  onCancel?: (args?: Unknown) => void;
  title?: string;
  description?: string;
  onCancelText?: string;
  onNextText?: string;
};

declare type UpdateNeededType = {
  needsUpdate: boolean;
  storeUrl: string;
  version: string;
  updateType: string | undefined;
};

declare type CheckVersionParamsType = {
  country: string;
  endpoint?: string;
  platform?: PlatformOSType;
  bundleId?: string;
  currentVersion?: string;
};

declare type AddressCEP = {
  zip: string;
  street: string;
  state: string;
  city: string;
};
