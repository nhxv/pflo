import mangastore from "../assets/mangastore-2.png";
import dashboard from "../assets/mangastore-admin.png";
import unique from "../assets/unique-fashion.png";

export default function ProjectPage() {
  return (
  <>
  <section className="text-neutral-100">
    <div className="px-0 md:px-12 lg:px-36 mb-4 animate fade-in-left">
      <h6 className="text-xl font-semibold">My projects</h6>
      <p className="text-neutral-400">Please read the README.md file of each project for more details.</p>
    </div>

    <div className="container px-0 md:px-12 lg:px-36 grid grid-cols-1 lg:grid-cols-2">
      <div className="animate fade-in-left flex flex-col my-3 lg:mr-3 bg-neutral-900">
        <div className="p-4 pb-0">
          <img src={mangastore} alt="mangastore-client" />
        </div>

        <div className="p-6">
          <h6 className="font-semibold text-lg mb-1">Manga Store</h6>
          <div className="flex flex-row flex-wrap">
            <span className="my-1 mr-2 p-1 font-medium border-2 
            border-cyan-300 bg-neutral-800 text-cyan-300">
              React
            </span>
            <span className="my-1 mr-2 p-1 font-medium border-2 
            bg-neutral-800  border-purple-300 text-purple-300">Redux</span>
            <span className="my-1 mr-2 p-1 font-medium border-2  
            bg-neutral-800 border-green-400 text-green-400">Spring</span>
            <span className="my-1 mr-2 p-1 font-medium border-2 
            bg-neutral-800 border-neutral-300 text-neutral-300">PostgreSQL</span>
          </div>
          <p className="my-4 text-neutral-400">A fullstack manga e-commerce web application that allow users to view, search and purchase manga.</p>
          <a href="https://github.com/nhxv/ms" target="_blank"  rel="noopener noreferrer" 
          className="link">View on Github</a>
        </div>
      </div>

      <div className="animate fade-in-right flex flex-col my-3 lg:ml-3 bg-neutral-900">
        <div className="p-4 pb-0">
          <img src={dashboard} alt="dashboard" />
        </div>
        
        <div className="p-6">
          <h6 className="font-semibold text-lg mb-1">Manga Dashboard</h6>
          <div className="flex flex-row flex-wrap">
            <span className="my-1 mr-2 p-1 font-medium border-2 
            border-cyan-300 bg-neutral-800 text-cyan-300">
              React
            </span>
            <span className="my-1 mr-2 p-1 font-medium border-2 
            bg-neutral-800  border-purple-300 text-purple-300">Redux</span>
            <span className="my-1 mr-2 p-1 font-medium border-2  
            bg-neutral-800 border-green-400 text-green-400">Spring</span>
            <span className="my-1 mr-2 p-1 font-medium border-2 
            bg-neutral-800 border-neutral-300 text-neutral-300">PostgreSQL</span>
          </div>
          <p className="my-4 text-neutral-400">A fullstack manga dashboard web application that allow owner to view, add, edit manga to the online store.</p>
          <a href="https://github.com/nhxv/ms" target="_blank"  rel="noopener noreferrer"
          className="link">View on Github</a>
        </div>
      </div>

      <div className="animate fade-in-left flex flex-col my-3 lg:mr-3 bg-neutral-900">
        <div className="p-4 pb-0">
          <img src={unique} alt="unique-fashion" />
        </div>
        
        <div className="p-6">
          <h6 className="font-semibold text-lg mb-1">Fashion Store</h6>
          <div className="flex flex-row flex-wrap">
            <span className="my-1 mr-2 p-1 font-medium border-2  
            bg-neutral-800 border-red-400 text-red-400">Angular</span>
            <span className="my-1 mr-2 p-1 font-medium border-2  
            bg-neutral-800 border-green-400 text-green-400">Spring</span>
            <span className="my-1 mr-2 p-1 font-medium border-2  
            bg-neutral-800 border-neutral-300 text-neutral-300">MySQL</span>
          </div>
          <p className="my-4 text-neutral-400">A fullstack clothing e-commerce web application. This is FPT Aptech final project.</p>
          <a href="https://github.com/nhxv/uq-ecommerce" target="_blank"  rel="noopener noreferrer"
          className="link">View on Github</a>
        </div>
      </div>

      <div className="animate fade-in-right flex flex-col my-3 lg:mr-3 bg-neutral-900">
        <div className="p-4 pb-0">
          <img src={unique} alt="unique-fashion" />
        </div>
        
        <div className="p-6">
          <h6 className="font-semibold text-lg mb-1">Task Manager</h6>
          <div className="flex flex-row flex-wrap">
            <span className="my-1 mr-2 p-1 font-medium border-2  
            bg-neutral-800 border-red-400 text-red-400">Angular</span>
            <span className="my-1 mr-2 p-1 font-medium border-2  
            bg-neutral-800 border-green-400 text-green-400">Spring</span>
            <span className="my-1 mr-2 p-1 font-medium border-2  
            bg-neutral-800 border-neutral-300 text-neutral-300">MySQL</span>
          </div>
          <p className="my-4 text-neutral-400">A fullstack clothing e-commerce web application. This is FPT Aptech final project.</p>
          <a href="https://github.com/nhxv/uq-ecommerce" target="_blank"  rel="noopener noreferrer"
          className="link">View on Github</a>
        </div>
      </div>
    </div>

  </section>
  </>
  );
}