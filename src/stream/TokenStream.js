"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TokenStream {
    constructor(tokens) {
        this._stream = [];
        this._position = 0;
        this._stream = tokens;
    }
    current() { return this._stream[this._position]; }
    next() { return this._stream[this._position++]; }
    previous() { return this._stream[this._position--]; }
    peek(to) { return this._stream[this._position + to]; }
    source(tokens) {
        this._position = 0;
        this._stream = tokens ? tokens : this._stream;
    }
    get stream() { return this._stream; }
    get position() { return this._position; }
    get eos() { return this._position === this._stream.length; }
}
exports.default = TokenStream;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9rZW5TdHJlYW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUb2tlblN0cmVhbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBO0lBR0UsWUFBWSxNQUFlO1FBRm5CLFlBQU8sR0FBWSxFQUFFLENBQUM7UUFDdEIsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUNDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUN2RCxPQUFPLEtBQVksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RCxJQUFJLEtBQVksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hELFFBQVEsS0FBWSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUQsSUFBSSxDQUFDLEVBQVUsSUFBVyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRSxNQUFNLENBQUMsTUFBZ0I7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBQ0QsSUFBSSxNQUFNLEtBQWMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzlDLElBQUksUUFBUSxLQUFhLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNqRCxJQUFJLEdBQUcsS0FBYyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Q0FDdEU7QUFmRCw4QkFlQyJ9