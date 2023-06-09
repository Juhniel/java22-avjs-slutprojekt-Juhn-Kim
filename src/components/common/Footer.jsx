export default function Footer() {
    return (
      <footer id="footer" className="bg-teal-500 text-white text-xl dark:bg-teal-800">
        <section className="max-w-4xl py-6 mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
          <address>
            k-pastries <br />
            Stortorget 25
            <br />
            211 34 <br />
            Malmö <br />
            Email: <a href="k-pastries@bakery.com">k-pastries@bakery.com</a>
            <br />
            Phone: <a href="+401231231">+40-123 12 31</a>
          </address>
  
          <div className="flex sm:flex-row items-end sm:gap-2">
              <p id="legal" className="text-right">
                Copyright &copy; <span id="year">2023</span>
              </p>
          </div>
        </section>
      </footer>
    );
  }