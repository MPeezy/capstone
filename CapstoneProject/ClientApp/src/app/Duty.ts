export interface Duty {

    id: number;
    name: string;
    description: string;
    due: string;
    completed: string;
}



export class Convert {
    public static toDuty(json: string): Duty{
        return JSON.parse(json);
    }

    public static dutyToJson(value: Duty): string {
        return JSON.stringify(value);
    }
}