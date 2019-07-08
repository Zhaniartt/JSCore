class Hotel {
    constructor(name,capacity){
        this.name = name;
        this.capacity = capacity;
        this.bookings = [];
        this.currentBookingNumber = 1;
        this.roomCont = {
            single: parseInt(this.capacity / 2),
            double: parseInt((this.capacity * 30) /100),
            maisonette: parseInt((this.capacity * 20) /100)
        }
        this.roomNumber = 1;
    }
    get roomsPricing(){
        return _roomCont;
    }
    set roomsPricing(typeRoom){
        let  s= {
            single: 50,
            double: 90,
            maisonette: 135
        }
        let _roomCont = s[typeRoom];
    }
    get servicesPricing(){
        return _serviceCont;
    }
    set servicesPricing(typeService){
        let s = {
            food:10,
            drink:15,
            housekeeping:25
        }
        let _serviceCont = s[typeService]
    }
    rentARoom(clientName,roomType,nights){
        if(this.roomCont[roomType] > 0){
            let currentBooking = {
                clientName,
                roomType,
                nights,
                roomNumber : this.roomNumber++
            }
            this.bookings.push(currentBooking);
            this.currentBookingNumber+=1;
            this.roomCont[roomType] -=1; 
            return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber}.`;
        }else{
            let output = []
            output.push(`No ${roomType} rooms available!`);
            Object.entries(this.roomCont).map(x=> {
                if(x[1] > 0){
                    output.push(`Available ${x[0]} rooms: ${x[1]}.`);
                }
            })
            return output.join(' ');
        }
    }
    roomService(currentBookingNumber,serviceType){

    }
}
