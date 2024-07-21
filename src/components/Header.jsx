import { useEffect, useRef } from "react";
import debounce from "lodash/debounce";

function Header() {
  const headerLineRef = useRef(null);

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (headerLineRef.current) {
        if (window.scrollY > 0) {
          headerLineRef.current.classList.add("header_line--visible");
        } else {
          headerLineRef.current.classList.remove("header_line--visible");
        }
      }
    }, 100);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel();
    };
  }, []);

  return (
    <header className="header">
      <div ref={headerLineRef} className="header_line"></div>
      <div className="header_container">
        <div className="header_wrapper">
          <div className="header_logo">
            <a href="#" className="header_logo-image">
              <img src="/logo.png" alt="company-logo" />
            </a>
            <p className="header_logo-text">
              Лучший способ путешествовать дешевле
            </p>
          </div>

          <div className="header_auth">
            <a href="#" className="header_auth-chat">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3C10.1771 3 8.4974 3.36458 6.96094 4.09375C5.45052 4.82292 4.23958 5.8125 3.32812 7.0625C2.44271 8.28646 2 9.64062 2 11.125C2 12.0885 2.19531 13 2.58594 13.8594C2.97656 14.7188 3.52344 15.513 4.22656 16.2422C4.01823 17.0495 3.60156 17.9089 2.97656 18.8203C2.61198 19.3411 2.3125 19.7188 2.07812 19.9531C2 20.0573 1.98698 20.1745 2.03906 20.3047C2.09115 20.4349 2.18229 20.5 2.3125 20.5C3.45833 20.5 4.57812 20.2656 5.67188 19.7969C6.42708 19.4583 7.14323 19.0286 7.82031 18.5078C9.14844 19.0026 10.5417 19.25 12 19.25C13.8229 19.25 15.4896 18.8854 17 18.1562C18.5365 17.4271 19.7474 16.4505 20.6328 15.2266C21.5443 13.9766 22 12.6094 22 11.125C22 9.64062 21.5443 8.28646 20.6328 7.0625C19.7474 5.8125 18.5365 4.82292 17 4.09375C15.4896 3.36458 13.8229 3 12 3Z"
                  fill="#0B1524"
                  fill-opacity="0.46"
                />
              </svg>
            </a>
            <div className="header_auth-cell">
              <a href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.89 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63001 5.36 6.00001 7.92 6.00001 11V16L4.71001 17.29C4.08001 17.92 4.52001 19 5.41001 19H18.58C19.47 19 19.92 17.92 19.29 17.29L18 16Z"
                    fill="#0B1524"
                    fill-opacity="0.46"
                  />
                </svg>
              </a>
              <div className="header_auth-cell-counter">54</div>
            </div>
            <div className="header_auth-account">
              <a href="#">
                <img src="/user.png" alt="chat-image" />
                <p>Оксана</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
