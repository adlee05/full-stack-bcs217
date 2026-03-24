function Details({ name, rollNo }: { name: String, rollNo: String }) {
  return (
    <div className="container mx-auto p-8 text-center relative z-10 border-4 rounded-2xl bg-card">
      <h1 className="text-2xl">Name: <span className="font-bold text-blue-500">{name}</span></h1>
      <h1 className="text-2xl">Roll Number: <span className="font-bold text-green-500">{rollNo}</span></h1>
    </div>
  );
}

export default Details;
