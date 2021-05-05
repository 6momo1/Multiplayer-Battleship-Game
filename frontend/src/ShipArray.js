// create div nodes by creating their length and assigning an ID
function createShipNodes(name, size){
    const divs = []
    for (let i = 0; i < size; i++) {
        divs.push(<div id={name+"-"+i}></div>)
    }
    return divs
}

const shipNames = ["destroyer","submarine","cruiser","battleship","carrier"];

const shipElementArray = [];

shipNames.forEach( shipName => {
    const shipElement = React.createElement('div')
});

<div ref={destroyerRef} onMouseDown={handleMouseDown} className="ship destroyer-container" draggable="true">
                    { createShipNodes("destroyer", 2) }
</div>