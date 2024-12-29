console.log('Hello')

var btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
    event.preventDefault();
    var bname = document.querySelector(".bname").value
    var gname = document.querySelector(".gname").value
    var bage = document.querySelector(".bage").value
    var gage = document.querySelector(".gage").value
    var bskin = document.querySelector(".bskin").value
    var gskin = document.querySelector(".gskin").value
    var blook = document.querySelector(".blook").value
    var glook = document.querySelector(".glook").value
    var bheight = document.querySelector(".bheight").value
    var gheight = document.querySelector(".gheight").value
    var bbehave = document.querySelector(".bbehave").value
    var gbehave = document.querySelector(".gbehave").value

    // Create an array of missing fields
    let missingFields = [];
    
    if (!bname) missingFields.push("Boy's Name");
    if (!gname) missingFields.push("Girl's Name");
    if (!bage) missingFields.push("Boy's Age");
    if (!gage) missingFields.push("Girl's Age");
    if (!bskin) missingFields.push("Boy's Skin");
    if (!gskin) missingFields.push("Girl's Skin");
    if (!blook) missingFields.push("Boy's Look");
    if (!glook) missingFields.push("Girl's Look");
    if (!bheight) missingFields.push("Boy's Height");
    if (!gheight) missingFields.push("Girl's Height");
    if (!bbehave) missingFields.push("Boy's Height");
    if (!bbehave) missingFields.push("Girl's Height");

    // If there are missing fields, show them in the alert
    if (missingFields.length > 0) {
        alert("Please fill in the following fields:\n" + missingFields.join("\n"));
        return;
    }

    // If all fields have values, proceed with logging
    console.log(bname, gname, bage, gage, bskin, gskin, blook, glook, bheight, gheight);

    //to get first (out of 5)
    cbname = bname.charCodeAt(0)
    cgname = gname.charCodeAt(0)
    gname = cbname
    sname = cgname
    if (cgname.length > cbname.length){gname = cgname; sname=cbname}
    p1 = (gname - sname)/5

    //to get second (out of 5)
    bage = parseInt(bage)
    gage = parseInt(gage)
    ggage =bage
    sage = gage
    if (gage > bage){ggage=gage; sage=bage}
    p2 = 5 - (ggage - sage)

    //to get third (out of 5)
    bskin = parseInt(bskin)
    gskin = parseInt(gskin)
    ggskin =bskin
    sskin = gskin
    if (gskin > bskin){ggskin=gskin; sage=bskin}
    p3 = 5 - (ggskin - sskin)

    //to get fourth (out of 5)
    blook = parseInt(blook)
    glook = parseInt(glook)
    gglook =blook
    slook = glook
    if (glook > blook){gglook=glook; slook=blook}
    p4 = 5 - (gglook - slook)

    //to get fifth (out 5)
    bheight = parseInt(bheight)
    gheight = parseInt(gheight)
    ggheight =bheight
    sheight = gheight
    if (gheight > bheight){ggheight=gheight; sheight=bheight}
    p5 = 5 - (ggheight - sheight)

    //to get sixth (out of 5)
    bbehave = parseInt(bbehave)
    gbehave = parseInt(gbehave)
    ggbehave =bbehave
    sbehave = gbehave
    if (gbehave > bbehave){ggbehave=gbehave; sbehave=bbehave}
    p6 = 5 - (ggbehave - sbehave)

    var p = p1+p2+p3+p4+p5+p6 +70+ '%'
    var lovespan = document.querySelector('.part2').getElementsByTagName('span')[0]
    lovespan.innerHTML= `Love Meter: ${p}`
    loveheight = document.querySelector('.loveheight')
    loveheight.style.height = p
})


