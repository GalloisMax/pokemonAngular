export class Pokemon {

    constructor(name?: string, hp?: number, cp?: number, picture?: string, types?: Array<string>, created?: Date, id?: number) {
        name = name; hp = hp; cp = cp; picture = picture; types = types; created = created; id = id
    };
    id!: number;
    hp!: number;
    cp!: number;
    name!: string;
    picture!: string;
    types!: Array<string>;
    created!: Date;
}