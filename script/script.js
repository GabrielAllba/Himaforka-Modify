const navigation = document.getElementById('navigation')
const himabanner = document.getElementById('hima-banner')
const showList = document.getElementsByClassName('fa-bars')[0]
const closeList = document.getElementsByClassName('fa-times')[0]
window.onscroll = () => {
        if(document.documentElement.scrollTop > 180){
            navigation.style.fontSize = '12px'
            navigation.style.backgroundColor = 'rgb(0, 34, 88)'
            himabanner.style.width = '7rem'
            showList.style.fontSize = '1.5rem'
        }
        else{
            navigation.style.fontSize = ''
            navigation.style.backgroundColor = ''
            himabanner.style.width = ''
            showList.style.fontSize = ''
        }
}
/*
showList.addEventListener('click', () => {
    navigation.style.height = '17rem'
})
*/
function toggleList(){
    if(navigation.style.height == '3.2rem'){
        navigation.style.height = '17rem'
    }
    else{
        navigation.style.height = '3.2rem'
    }
}