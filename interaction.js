d3.select("body")
    .append("p")
        .text("No. 2 Seed: Danny Nelson vs. No. 1 Seed: Katharine Card Sherman")
d3.select("body")
    .append("img")
        .attr("src", "danny.png")
        .on("mouseover",function()
            {
            d3.select(this)
                    .attr("src", "tennis-player.jpg")
            
            })
        .on("mouseleave",function()
           {
            d3.select(this)
                .attr("src", "danny.png")
    
    
            })
var katscore = 1
var dannyscore = 1
d3.select("body")
    .append("p")
        .text("Score:")
d3.select("body")
    .append("p")
        .text("Kat: "+ katscore)
        .on("click", function()
           {
        katscore = katscore+1
        d3.select(this)
            .text("Kat: "+ katscore)
    
            })
d3.select("body")
    .append("p")
        .text("Danny: "+dannyscore)
        .on("click", function()
           {
            dannyscore = dannyscore+1
            d3.select(this)
                .text("Danny: "+dannyscore)
            })
d3.select("body")
    .append("img")
        .attr("src", "me mii.png")
        .attr("id", "Mii")
        .on("click", function()
        {
            d3.select("body")
                .append("img")
                    .attr("src", "me mii.png")
                    .attr("id", "Mii")
        })

    