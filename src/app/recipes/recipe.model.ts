export class Recipe {
    public name: string;
    public description: string;
    public categorie: string;
    public imagePath: string;

    constructor(name:string, desc:string, cat:string, imagePath:string ){
        this.name = name;
        this.description = desc;
        this.categorie = cat;
        this.imagePath = imagePath;

    }
}