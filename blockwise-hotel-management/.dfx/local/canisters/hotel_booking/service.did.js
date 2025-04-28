export const idlFactory = ({ IDL }) => {
  const RoomType = IDL.Variant({
    'deluxe' : IDL.Null,
    'presidential' : IDL.Null,
    'suite' : IDL.Null,
    'standard' : IDL.Null,
  });
  const RoomId = IDL.Nat;
  const BookingId = IDL.Nat;
  const Result_3 = IDL.Variant({ 'ok' : IDL.Null, 'err' : IDL.Text });
  const RoomStatus = IDL.Variant({
    'occupied' : IDL.Null,
    'available' : IDL.Null,
    'maintenance' : IDL.Null,
  });
  const Room = IDL.Record({
    'id' : RoomId,
    'status' : RoomStatus,
    'pricePerNight' : IDL.Nat,
    'roomNumber' : IDL.Text,
    'capacity' : IDL.Nat,
    'roomType' : RoomType,
  });
  const BookingStatus = IDL.Variant({
    'cancelled' : IDL.Null,
    'completed' : IDL.Null,
    'confirmed' : IDL.Null,
  });
  const Time = IDL.Int;
  const CustomerId = IDL.Principal;
  const Booking = IDL.Record({
    'id' : BookingId,
    'status' : BookingStatus,
    'guestCount' : IDL.Nat,
    'checkInDate' : Time,
    'checkOutDate' : Time,
    'customerId' : CustomerId,
    'roomId' : RoomId,
    'totalPrice' : IDL.Nat,
  });
  const Result_2 = IDL.Variant({ 'ok' : Booking, 'err' : IDL.Text });
  const Result_1 = IDL.Variant({ 'ok' : Room, 'err' : IDL.Text });
  const Result = IDL.Variant({ 'ok' : BookingId, 'err' : IDL.Text });
  return IDL.Service({
    'addRoom' : IDL.Func([IDL.Text, RoomType, IDL.Nat, IDL.Nat], [RoomId], []),
    'cancelBooking' : IDL.Func([BookingId], [Result_3], []),
    'getAvailableRooms' : IDL.Func([], [IDL.Vec(Room)], ['query']),
    'getBookingDetails' : IDL.Func([BookingId], [Result_2], ['query']),
    'getMyBookings' : IDL.Func([], [IDL.Vec(Booking)], ['query']),
    'getRoomDetails' : IDL.Func([RoomId], [Result_1], ['query']),
    'makeBooking' : IDL.Func([RoomId, Time, Time, IDL.Nat], [Result], []),
  });
};
export const init = ({ IDL }) => { return []; };
