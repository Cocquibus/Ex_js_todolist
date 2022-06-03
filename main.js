let inputNom = document.getElementById("nommage");
let btnCreation = document.getElementById("creation")
let btnAffichageAll = document.getElementById("tout")
let btnAffichageNfini = document.getElementById("aFaire")
let btnAffichageFini = document.getElementById("fini")
let triageBase = false
class Article{
    constructor(name){
        this.name = name,
        this.fini = btnAffichageFini,
        this.nFini = btnAffichageNfini,
        this.tout = btnAffichageAll,
        this.finiMs = false,
        this.nFiniMs = false,
        this.container = document.createElement("div"),
        this.containerTitle = document.createElement("div"),
        this.title = document.createElement("h1"),
        this.containerBtn = document.createElement("div"),
        this.validation = document.createElement("button"),
        this.modification = document.createElement("button"),
        this.suppression = document.createElement("button")

        this.validation.addEventListener("click",()=>{
            this.container.classList.add("vert")
            if(this.nFiniMs == true){
                this.container.classList.add("masque")
            }
        }),
        this.suppression.addEventListener("click",()=>{
            this.container.remove()
        }),
        this.modification.addEventListener("click",()=>{
            this.title.innerHTML = prompt("nouveau nom ?")
        }),
        this.fini.addEventListener("click",()=>{
            this.finiMs = true
            this.nFiniMs = false
            triageBase = true
            if(this.container.classList.contains("vert") == false){
                this.container.classList.add("masque")
            }
            else{
                this.container.classList.remove("masque")
            }
        })
        this.nFini.addEventListener("click",()=>{
            this.nFiniMs = true
            this.finiMs = false
            triageBase = false
            if(this.container.classList.contains("vert") == true){
                this.container.classList.add("masque")
            }
            else{
                this.container.classList.remove("masque")
            }
        })
        this.tout.addEventListener("click",()=>{
            triageBase = false
            this.container.classList.remove("masque")
        })
    }
    generator(a,b,c){
        document.body.appendChild(this.container)
        this.container.appendChild(this.containerTitle)
        this.container.appendChild(this.containerBtn)
        this.containerTitle.appendChild(this.title)
        this.containerBtn.appendChild(this.validation)
        this.containerBtn.appendChild(this.modification)
        this.containerBtn.appendChild(this.suppression)
        
        this.title.innerHTML = this.name
        this.validation.innerHTML = "Valider"
        this.modification.innerHTML = "Modifier"
        this.suppression.innerHTML = "Supprimer"
        
        a.classList.add("articles")
        b.classList.add("title")
        c.classList.add("menu")
        
        if(triageBase == true){
            this.container.classList.add("masque")
        }
    }
}
btnCreation.addEventListener("click", ()=>{
    let x = new Article(inputNom.value)
    x.generator(x.container,x.containerTitle,x.containerBtn)
})