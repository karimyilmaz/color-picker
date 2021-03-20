let hex_decimal = new Map()
hex_decimal['0'] = '0'
hex_decimal['1'] = '1'
hex_decimal['2'] = '2'
hex_decimal['3'] = '3'
hex_decimal['4'] = '4'
hex_decimal['5'] = '5'
hex_decimal['6'] = '6'
hex_decimal['7'] = '7'
hex_decimal['8'] = '8'
hex_decimal['9'] = '9'
hex_decimal['10'] = 'A'
hex_decimal['11'] = 'B'
hex_decimal['12'] = 'C'
hex_decimal['13'] = 'D'
hex_decimal['14'] = 'E'
hex_decimal['15'] = 'F'


export const rgb_to_hex = (rgb) => {
    return '#'+[hex_decimal[parseInt(rgb[0]/16)], hex_decimal[parseInt(rgb[0]%16)], 
    hex_decimal[parseInt(rgb[1]/16)], hex_decimal[parseInt(rgb[1]%16)], 
    hex_decimal[parseInt(rgb[2]/16)], hex_decimal[parseInt(rgb[2]%16)]].join('')
}

const valid_digits = (color) => {
    let valid = true
    
    color.split('').slice(1).forEach(character => { 
        if(!['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'].includes(character.toUpperCase())){
            valid = false
            return
            }
        })
    
    return valid
}


export const validate_input = (colorInput) => {
    let first_char = colorInput.split('')[0]
    let input_len = colorInput.split('#').join('').length-1  

    
    if((first_char === '#') && (input_len === 2 || input_len === 5) && (valid_digits(colorInput)))
        return true
    
    return false
}