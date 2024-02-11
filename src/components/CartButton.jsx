/* eslint-disable react/prop-types */
export default function CartButton({ totalItems }) {
  return (
    <>
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content justify-self-end">
        {/* Page content here */}
        <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-sm indicator-item text-white bg-orange-500 border-none">{totalItems}</span>
          </div>
        </label>
      </div>
    </>
  );
}
