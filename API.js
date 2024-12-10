const express = require ('express');

const app = express();
const cors =require('cors');

app.use(express.json());
app.use(cors());

  const grid = [
        {
          id:1,
          thumbnail:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
          logo2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",
          title:"Bulbuli | Coke Studio Bangla",
          channel:"Coke Studio Bangla",
          views:"1.5M views",
          time:"2 days ago",
        },
        {
          id: 2,
          thumbnail:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true",
          logo2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true",
          title:"Infinix Note 12 | AMOLED",
          channel:"ATC Android ToTo Company",
          views:"4.2M views",
          time:"2 days ago",
        },
        {
            id:3,
            thumbnail:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true",
            logo2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",
            title:"My first UX Design case study-This got me my fist job.",
            channel:"Saptarshi Prakash",
            views:"4.8k views",
            time:"1 year ago",
          },
          {
            id: 4,
            thumbnail:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true",
            logo2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true",
            title:"My Mix",
            channel:"Lopamudra Mitra, Anupam Roy, and more",
          },
          {
            id:5,
            thumbnail:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true",
            logo2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true",
            title:"UX Design - What is it? (From AJ &Smart)",
            channel:"Aj&s]Smar",
            views:"150kMviws",
            time:"3 years ago",
          },
          {
            id: 6,
            thumbnail:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-5.png?raw=true",
            logo2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true",
            title:"Mix-Mombati | Mohon Sharif | Dhaka | Dose | Mahib Ahsan ft Anika",
            channel:"Mohon Sharif, Odd Signature, Shayan Chowdhury Arnob, and more",
            views:"4.2M views",
            time:"2 days ago",
          },
          {
            id:7,
            thumbnail:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-6.png?raw=true",
            logo2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true",
            title:"Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita",
            channel:"Aj&s]Smar ",
            views:"150kMviws",
            time:"3 years ago",
          },
          {
            id: 8,
            thumbnail:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true",
            logo2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true",
            title:"Infinix Note 12 | AMOLED",
            channel:"ATC Android ToTo Company",
            views:"4.2M views",
            time:"2 days ago",
          },
          {
            id:9,
            thumbnail:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail.png?raw=true",
            logo2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(6).png?raw=true",
            title:"Bulbuli | Coke Studio Bangla",
            channel:"Coke Studio Bangla",
            views:"1.5M views",
            time:"2 days ago",
          },
          {
            id:10,
            thumbnail:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-1.png?raw=true",
            logo2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(5).png?raw=true",
            title:"Infinix Note 12 | AMOLED",
            channel:"ATC Android ToTo Company",
            views:"4.2M views",
            time:"2 days ago",
          },
          {
            id:11,
            thumbnail:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true",
            logo2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true",
            title:"Infinix Note 12 | AMOLED",
            channel:"ATC Android ToTo Company",
            views:"4.2M views",
            time:"2 days ago",
          },
          {
            id:12,
            thumbnail:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-3.png?raw=true",
            logo2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true",
            title:"Infinix Note 12 | AMOLED",
            channel:"ATC Android ToTo Company",
            views:"4.2M views",
            time:"2 days ago",
          },
      ];

app.get("/grid", (req, res) => {
    res.json(grid);
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});