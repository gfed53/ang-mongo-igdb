/*---------- 
Class used to store a collection of data fetched from the API - data that will be updated in the backend occasionally
*/
export class MyCollection {
	_id: string;
	data: any[];
	name: string;
	timestamp: number;
}