const profile = {
    name: "平井",
    age: "27",
    hobby: "dance",
    major: "韓国",
    pet: "ぶー"
}

const dictionary = {
    name: "名前",
    age: "年齢",
    hobby: "趣味",
    major: "専攻",
    pet: "ペット"
}

for (const key of Object.keys(profile)) {
    console.log("私の" + dictionary[key] + "は" + profile[key] + "です")
    
}