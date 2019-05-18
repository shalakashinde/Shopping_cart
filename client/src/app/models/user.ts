export class User {
    id: number;
    username: string;
    password: string;
    email: string;
    mob_no: number;
    constructor(obj: any = null) {
        if (obj != null) {
            Object.assign(this, obj);
        }
    }
}
