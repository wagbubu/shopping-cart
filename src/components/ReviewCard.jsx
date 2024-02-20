import fakeCustomer from "../assets/fakeCustomer.jpeg";

export default function ReviewCard() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10">
        <figure>
          <img
            width="120"
            className="rounded-full"
            src={fakeCustomer}
            alt="A handsome guy"
          />
        </figure>
        <div className="text-center">
          <i className="fa-solid fa-quote-left"></i>
          <p className="text-2xl italic">
            Wow! The store really lives up to its name! It&apos;s so fake,
            It&apos;s so unreal!
          </p>
          <p className="text-gray-500 text-xl text-center mt-5">- Raven Guirao</p>
        </div>
      </div>
    </>
  );
}
