const CompleteRegister = ({ register, errors }) => {
  return (
    <>
      <div className="name">
        <label className="mb-2 block text-sm font-medium">
          Name:
        </label>
        <input
          {...register("name")}
          type="text"
          placeholder="Enter Your Name ..."
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 outline-none"
        />
        <p>{errors.name?.message}</p>
      </div>
      <div className="Password">
        <label className="mb-2 block text-sm font-medium">Password:</label>
        <input
          {...register("password")}
          type="password"
          placeholder="Enter Your Password..."
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 outline-none"
        />
        <p className="mt-1 text-sm text-red-500">{errors.password?.message}</p>
      </div>

      <div className="role mb-6">
        <label className="mb-2 block text-sm font-medium">Role:</label>

        <label className="flex items-center p-3 border rounded-lg">
          <input type="radio" value="client" {...register("role")} />
          <span className="ml-2">Client</span>
        </label>

        <label className="flex items-center p-3 border rounded-lg">
          <input type="radio" value="craftsman" {...register("role")} />
          <span className="ml-2">Craftsman</span>
        </label>
         <p>{errors.role?.message}</p>
      </div>
    </>
  );
};

export default CompleteRegister;
