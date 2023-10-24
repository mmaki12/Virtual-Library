// create your Media class:
class Media{
    constructor(title ,year ,genre){
        this.year = year
        this.genre = genre
        Media.totalMediaCount++;
    }
    summary(){
        return ("Title: "+this.title+" Year: "+this.year+" Genre: "+this.genre)
    }
}
Media.totalMediaCount = 0;

module.expoxrts = Media;

