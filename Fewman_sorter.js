

var fs=require('fs');
var data=fs.readFileSync('fews_gen0.json', 'utf8');
var testObj=JSON.parse(data);




var Fewmans = objSort(testObj, 'Body', 'Intelligence','GodsGift','Eyes','Hair','Curse','Sexuality','Career');


function objSort() {
    var args = arguments,
        array = args[0],
        case_sensitive, keys_length, key, desc, a, b, i;

    if (typeof arguments[arguments.length - 1] === 'boolean') {
        case_sensitive = arguments[arguments.length - 1];
        keys_length = arguments.length - 1;
    } else {
        case_sensitive = false;
        keys_length = arguments.length;
    }

    return array.sort(function (obj1, obj2) {
        for (i = 1; i < keys_length; i++) {
            key = args[i];
            if (typeof key !== 'string') {
                desc = key[1];
                key = key[0];
                a = obj1[args[i][0]];
                b = obj2[args[i][0]];
            } else {
                desc = false;
                a = obj1[args[i]];
                b = obj2[args[i]];
            }


            if (! desc) {
                if (a < b) return -1;
                if (a > b) return 1;
            } else {
                if (a > b) return -1;
                if (a < b) return 1;
            }
        }
        return 0;
    });
} 

FewmansLight = Fewmans; //Don't destroy original object array, Generate just an ID list

for(var i = 0; i < FewmansLight.length; i++) {
    delete FewmansLight[i].Body;
    delete FewmansLight[i].GodsGift;
    delete FewmansLight[i].Gender;
    delete FewmansLight[i].Eyes;
    delete FewmansLight[i].Hair;
    delete FewmansLight[i].Curse;
    delete FewmansLight[i].Sexuality;
    delete FewmansLight[i].Career;
    delete FewmansLight[i].Intelligence;
}

sortedFew = JSON.stringify(FewmansLight, null, "");

fs = require('fs');
fs.writeFile('Fewmans_SortedLight.txt',sortedFew, function (err) {
if (err) return console.log(err);
console.log('Sorted IDs Generated');
});

