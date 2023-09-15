import { create } from "zustand";

export const useClientsStore = create((set) => ({
  clients: [
    {
      name: "Matthew Paul",
      comment:
        "Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.",
      avatar: "src/images/matthew_avatar.png",
    },
    {
      name: "Anna James",
      comment:
        "Good job. I'm glad that I have found these guys. They are really good at their job. It was done quickly and perfectly without any problems.",
      avatar: "src/images/anna_avatar.png",
    },
    {
      name: "James Paul",
      comment:
        "Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.",
      avatar: "src/images/james_avatar.png",
    },
    {
      name: "Amelia Jonson",
      comment:
        "Great job. I'm glad that I have found these guys. They are really good at their job. It was done quickly and perfectly without any problems.",
      avatar: "src/images/amelia_avatar.png",
    },
  ],
  maxClientsNumber: 4,
  clientIndex: 0,
  changeClientIndex: (index) => set(() => ({ clientIndex: index })),
}));
