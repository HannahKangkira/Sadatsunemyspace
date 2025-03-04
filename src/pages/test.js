const getRoadname = async () => {
    const res = await fetch('http://192.198.3.239:8080/api/roadname', {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
    })
    const { data } = await res.json();
    data.map((road)=>{
        road.name
        road.trans
        road.direction
    })
    
}