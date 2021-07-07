export default {
    sleep: (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    },

    /*
        @param Html Element Current: current bar animation style
        @param Html Element Next: next bar animation style
    */
    updateBarStyle: function (moment, current, next, velocity, tempColor) {
        if (moment === "before") {
            current.style.backgroundColor = '#009BFF'
            current.style.transition = velocity + 's'
            current.children[0].style.color = 'white'

            next.style.backgroundColor = '#0070FF'
            next.style.transition = velocity + 's'
            next.children[0].style.color = 'white'
        }


        if (moment === "after") {
            current.style.backgroundColor = tempColor.current
            current.style.transition = '0.3s'
            current.children[0].style.color = 'gray'

            next.style.backgroundColor = tempColor.next
            next.style.transition = '0.3s'
            next.children[0].style.color = 'gray'
        }
    }
}