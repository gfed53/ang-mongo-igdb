// Class used to store our filter settings, specifically used to refine a related search.
export class MyRelatedControls {
  selectedPlatformIDs?: number[];
  // dateRange?: {
  //   after?: any,
  //   before?: any 
  // };
  dateRange?: number[];
  order?: string;
}