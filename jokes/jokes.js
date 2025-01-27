const memeList = [
    // "https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Fpv4t17ezq89b1.jpg",
    "https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/141282428_1823290801180446_2646056897862344048_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=cRRdB_K2wBYQ7kNvgGBNVBh&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=A-DYxgCji_Frv_B4w6uSl-L&oh=00_AYCIcoDSvzXb3olZBpfmzuUGMk3phMBM0u-3JTY2yMtp2Q&oe=67BF25CB",
    // "https://scontent-vie1-1.cdninstagram.com/v/t51.29350-15/461174610_561225149666015_1495877112039926259_n.webp?stp=dst-jpg_e35_s1080x1080_tt6&_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=d80NuCwbF6YQ7kNvgG1kMTn&_nc_gid=fbe4f8d90b7740f39413a4d65085393a&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AYD4IqRZ7V89faZT82QcxYOl5GwCIKUh8i2KHxmyCDu4Lg&oe=679DB70F&_nc_sid=d885a2",
    // "https://scontent-vie1-1.cdninstagram.com/v/t51.29350-15/465084888_1046292093702239_4053396021725345553_n.webp?stp=dst-jpg_e35_s750x750_sh0.08_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDM5eDEyMzcuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=TYS6rOeCEMcQ7kNvgE2vY2U&_nc_gid=644e322bb0d046608d63701ce5afddec&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AYDYiQNS587UNSTKJa13m4BZnh6k-KLzkIl8pBP5PM3azQ&oe=679DA4FB&_nc_sid=d885a2",

    "https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/35344203_1023925281117006_6829940797501079552_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=vRnX8q2Maz8Q7kNvgEQF7XH&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=AsuwCPVsWXOvbmpNk9zDDxs&oh=00_AYBxgiNmhCiBi3zHPpIMGbUOAP0aK6m5Agd1I4p8lUdLPA&oe=67BF4BD4",
    "https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/37733363_1065879060254961_1277607613550297088_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ImVq4bhW_ZsQ7kNvgGJNHAu&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=AupJtAVwWI1CkuFLJB2sUMA&oh=00_AYAsARNP9t-VjY8aPPzRj3j0OHoIMpCZXQt4BUQcdf5prw&oe=67BF3CBA",
    "https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/71751359_1394444827398381_1579666336991150080_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=k_--dmwBSqgQ7kNvgHH6IbI&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=A2eXtnMcPED9xtQpwkHDmky&oh=00_AYATFvNsSLmoati2lMfQWCWjiUNkWeQ5jyCAhMoKeGYkog&oe=67BF3C46",
    "https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/76776556_1420494431460087_1289331955145375744_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_TxndgJgCPMQ7kNvgH6An1t&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=Ajnzo5RVkQu78i27-s7VpLJ&oh=00_AYB8fvYMHifDVjjSOyjhRVmuIOQ1Yw9gtKkigdgfyXwj1g&oe=67BF2D2C",
    "https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/80830253_1475130095996520_2971860134650707968_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=k9tc3PBit64Q7kNvgFn_IcQ&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=AEwWk_KjZgRy28DyG6sNukq&oh=00_AYAlANyLKGMMC_Sxqe48yr3MXtEILlvd2eDfjo9y_c2j4Q&oe=67BF3FBE",
    "https://scontent-vie1-1.cdninstagram.com/v/t51.29350-15/454360860_1221482152367635_4897612284294231972_n.webp?stp=dst-jpg_e35_p1080x1080_tt6&_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=axM-Ua4WQksQ7kNvgEg9CAV&_nc_gid=2e66a43327a2400eac29e91c5d8b1049&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AYDl29LqMDNP0s3ziZczM8q-9_PqrzXLno0CPNVlmeDLpA&oe=679D9D61&_nc_sid=d885a2",
    "https://scontent-vie1-1.cdninstagram.com/v/t51.29350-15/448670932_1196458758050323_1440201345443266267_n.webp?stp=dst-jpg_e35_tt6&_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=LodskymOhFUQ7kNvgFnjKSQ&_nc_gid=e41c7a9da4284b2c9ef306f8fcd3a40d&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AYB8DSxwuNB3zR5CBiKhLBVutO8Oe_pId_Tl1H8gOZsgQg&oe=679DAA31&_nc_sid=d885a2",
    "https://scontent-vie1-1.cdninstagram.com/v/t51.29350-15/453170792_507232075095159_7896064425293428088_n.webp?stp=dst-jpg_e35_p1080x1080_tt6&_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=9t1IvMHfJsIQ7kNvgHYPwHV&_nc_gid=ea774eb6f6d448b7b2cc4c259d7ac69a&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AYBMulQJ6WjcAKpImdsCfXxrwyH4RO_xhOwwX1tccgldfg&oe=679DBF8A&_nc_sid=d885a2",
    "https://scontent-vie1-1.cdninstagram.com/v/t51.29350-15/431741372_3533786373542656_6415939768367567198_n.jpg?stp=dst-jpg_e15_tt6&_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=sHIrmMmrFm0Q7kNvgE9SgoL&_nc_gid=2d5cc37b17844b57b48496d47ffa9e03&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AYCtrFvR3E4KWfKDBqB2oTDZoBarn4nlUucj3i1ZKNsMlQ&oe=679DAA73&_nc_sid=d885a2",
    "https://scontent-vie1-1.cdninstagram.com/v/t51.29350-15/380297705_914310613363914_3675772344087730658_n.webp?stp=dst-jpg_e35_tt6&_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=M3q0huTaTe4Q7kNvgEiFzEI&_nc_gid=160b0a3fd8cd4f79b8f3f0404df89ca9&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AYBCnD3Ld3MJnWH1xf5iux4JQl7CwtvP5fImqlNHRTnZEw&oe=679DBC4C&_nc_sid=d885a2",
    "https://scontent-vie1-1.cdninstagram.com/v/t51.29350-15/337910093_238830838598023_6628140335785539008_n.webp?stp=dst-jpg_e35_tt6&_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=kUQtuZHAp5kQ7kNvgE3A2T0&_nc_gid=a2186566130c4b19be73a2e5b1a32e54&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AYCAsOL2PYHBvKqJkDNuO_vlUbzaWb93OEziuCq5EAMnyA&oe=679DA744&_nc_sid=d885a2",
    "https://scontent-vie1-1.cdninstagram.com/v/t51.29350-15/337780244_207288201921230_50939257684019948_n.webp?stp=dst-jpg_e35_tt6&_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=ebam3kRkx-EQ7kNvgFq3suT&_nc_gid=a2186566130c4b19be73a2e5b1a32e54&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AYARvlKYlrCWmww8ml5_79oEQfXl5GatgGK-_4GVlxtCgA&oe=679D8B3B&_nc_sid=d885a2",
    
    //https://www.instagram.com/skautskememez/
];
var unseenMemes = memeList.slice();

document.addEventListener("DOMContentLoaded", function() {
    randomMeme();
});

function loadMeme(filename_) {
    const filename=filename_;
    console.log("Loading meme: " + filename);
    const memeContainer = document.getElementById("meme-container");
    if (memeContainer) {
        memeImg = document.createElement("img");
        memeImg.src = filename;
        memeImg.alt = "Meme";
        memeImg.id = "meme";
        try{
            memeContainer.removeChild(document.getElementById("meme"));
        }catch(e){}
        memeContainer.appendChild(memeImg);
    }
}
function randint(from, to){
    return Math.floor(Math.random() * (to - from) + from);
}
function randomMeme() {
    var memeIndex = randint(0, unseenMemes.length);
    var memeContent = unseenMemes[memeIndex];
    if (unseenMemes.length <= 1) {
        unseenMemes = memeList.slice();
    }
    unseenMemes.splice(unseenMemes.indexOf(memeContent), 1);
    loadMeme(memeContent);
}