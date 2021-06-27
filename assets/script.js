const encode = document.querySelector('#encode');
const decode = document.querySelector('#decode');
const copy = document.querySelector('#copy');
const inp = document.querySelector('#inp');
const outp = document.querySelector('#outp');

const data = " -,.123456789aăâáàảãạắằẳẵặấầẩẫậbcdđeêéèẻẽẹếềểễệfghiíìỉĩijklmnoôơóòỏõọốồổỗộớờởỡowjpqrstuưúùủũụứừửữựvxyýỳỷỹỵwz".split('');

const tt = [
    '🙂','😀','😄','😆','😅','😂','🤣','😊','😌','😉','😏','😍','😘',
    '😗','😙','😚','🤗','😳','🙃','😇','😈','😛','😝','😜','😋','🤤','🤓','😎','🤑','😒','🙁',
    '☹️',
    '😞',
    '😔','😖',
    '😓','😢','😢','😭','😟','😣','😩','😫','😕','🤔','🙄','😤',
    '😠',
    '😡',
    '😶',
    '🤐','😐','😑','😯','😲','😧',
    '😨',
    '😰',
    '😱',
    '😪',
    '😴',
    '😬','🤥','🤧','🤒','😷','🤕','😵','🤢','🤠','🤡','👿','👹','👺','👻','💀','👽','👾','🤖',
    '💩',
    '🎃',
    '👍',
    '👎',
    '✌️',
    '🤞','👌','🤙','🤘','🖕','☝️','👉','👈','👇','👆','👊','✊',
    '🤜',
    '🤛',
    '💪','✍️','🙏','🤳','👏','🤝',
    '🙌',
    '👐'

]

let encode_char = (c)=>{
    for(let i=0;i<data.length;i++){
        if(c==data[i]){
            return tt[i];
        }
    }
    return c;
}

let decode_char = (c)=>{
    for(let i=0;i<tt.length;i++){
        if(c==tt[i]){
            return data[i];
        }
    }
    return c;
}

encode.addEventListener('click',()=>{
    let str = inp.value.split('');
    let out = '';
    for(let i=0;i<str.length;i++){
        out += encode_char(str[i])+' ';
    }
    outp.value = out;
});

decode.addEventListener('click',()=>{
    let str = inp.value.split(' ');
    let out = '';
    for(let i=0;i<str.length;i++){
        out += decode_char(str[i]);
    }
    outp.value = out;
});
copy.addEventListener('click',()=>{
    outp.select();
    outp.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.querySelector('#pop').classList.add('active');
    setTimeout(()=>{document.querySelector('#pop').classList.remove('active')},2000);
});

