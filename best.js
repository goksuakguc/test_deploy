const arr = ['lazy boy', 'recliner',
    'massage',
    'meditation',
    'hot shower',
    'cheese, fondue',
    'hot coffee with cashew milk',
    'kitten falling asleep on my lap'];
    
    const fs = require('fs');

    fs.writeFile('best_things_ever.txt', arr, (err) => {
        if(err){
            console.log('cant create file', err);
            
        } else{
            console.log('create file', err);

        }
    });