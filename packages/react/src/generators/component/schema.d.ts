import { SupportedStyles } from '../../../typings/style';

export interface Schema {
  name: string;
  project: string;
  style: SupportedStyles;
  skipTests?: boolean;
  directory?: string;
  export?: boolean;
  pascalCaseFiles?: boolean;
  pascalCaseDirs?: boolean;
  classComponent?: boolean;
  routing?: boolean;
  js?: boolean;
  flat?: boolean;
  globalCss?: boolean;
}
