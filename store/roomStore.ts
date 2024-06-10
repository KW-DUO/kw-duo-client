import create from 'zustand';

interface RoomState {
  roomId: number | null;
  setRoomId: (id: number) => void;
}

const useRoomStore = create<RoomState>((set) => ({
  roomId: null,
  setRoomId: (id) => set({ roomId: id }),
}));

export default useRoomStore;
