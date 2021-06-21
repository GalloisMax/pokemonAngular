export class Pokemon {

    constructor(name?: string, hp?: number, cp?: number, picture?: string, types?: Array<string>, created?: Date, id?: number, firebaseId?: string) {
        name = name; hp = hp; cp = cp; picture = picture; types = types; created = created; id = id; firebaseId = firebaseId
    };
    id!: number;
    firebaseId?: string;
    hp!: number;
    cp!: number;
    name!: string;
    picture!: string;
    types!: Array<string>;
    created!: Date;
}