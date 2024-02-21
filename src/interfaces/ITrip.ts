export interface IConditions {
 datetime: string;
 tempmax: number;
 tempmin: number;
 icon: string;
}

export interface ICurrentConditions {
 datetime: string;
 temp: number;
 icon: string;
}

export interface IWeather {
 days: IConditions[];
 currentConditions: ICurrentConditions | null;
}

export interface ITrip {
 id: string;
 weather: IWeather;
 img: string;
 location: string;
 startDate: string;
 endDate: string;
}
