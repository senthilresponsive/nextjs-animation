
"use client";
import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  country: string;
  gender: string;
  terms: boolean;
  skills: { name: string }[];
};

export default function Registration() {
  const [step, setStep] = useState(1);

  const {
    register,
    control,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      skills: [{ name: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });

  const nextStep = async () => {
    const valid = await trigger();
    if (valid) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
    alert("Registration Successful!");
    reset();
    setStep(1);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">
        User Registration
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Step 1 - Basic Info */}
        {step === 1 && (
          <>
            <div>
              <label className="block mb-1">First Name</label>
              <input
                {...register("firstName", { required: "First name is required" })}
                className="w-full border px-3 py-2 rounded"
              />
              <p className="text-red-500 text-sm">{errors.firstName?.message}</p>
            </div>

            <div>
              <label className="block mb-1">Last Name</label>
              <input
                {...register("lastName", { required: "Last name is required" })}
                className="w-full border px-3 py-2 rounded"
              />
              <p className="text-red-500 text-sm">{errors.lastName?.message}</p>
            </div>

            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                })}
                className="w-full border px-3 py-2 rounded"
              />
              <p className="text-red-500 text-sm">{errors.email?.message}</p>
            </div>

            <button
              type="button"
              onClick={nextStep}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          </>
        )}

        {/* Step 2 - Password */}
        {step === 2 && (
          <>
            <div>
              <label className="block mb-1">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Min 6 characters" },
                })}
                className="w-full border px-3 py-2 rounded"
              />
              <p className="text-red-500 text-sm">{errors.password?.message}</p>
            </div>

            <div>
              <label className="block mb-1">Confirm Password</label>
              <input
                type="password"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                className="w-full border px-3 py-2 rounded"
              />
              <p className="text-red-500 text-sm">
                {errors.confirmPassword?.message}
              </p>
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Back
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Next
              </button>
            </div>
          </>
        )}

        {/* Step 3 - Additional Info */}
        {step === 3 && (
          <>
            <div>
              <label className="block mb-1">Country</label>
              <select
                {...register("country", { required: "Country is required" })}
                className="w-full border px-3 py-2 rounded"
              >
                <option value="">-- Select Country --</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
              <p className="text-red-500 text-sm">{errors.country?.message}</p>
            </div>

            <div>
              <label className="block mb-1">Gender</label>
              <div className="flex gap-4">
                <label>
                  <input type="radio" value="male" {...register("gender", { required: "Select gender" })} /> Male
                </label>
                <label>
                  <input type="radio" value="female" {...register("gender")} /> Female
                </label>
              </div>
              <p className="text-red-500 text-sm">{errors.gender?.message}</p>
            </div>

            {/* Dynamic Array: Skills */}
            <div>
              <label className="block mb-1">Skills</label>
              {fields.map((field, index) => (
                <div key={field.id} className="flex gap-2 mb-2">
                  <input
                    {...register(`skills.${index}.name`, { required: "Skill is required" })}
                    placeholder="Enter skill"
                    className="flex-1 border px-3 py-2 rounded"
                  />
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    X
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => append({ name: "" })}
                className="bg-green-500 text-white px-4 py-1 rounded"
              >
                Add Skill
              </button>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" {...register("terms", { required: "You must accept terms" })} />
              <span>I agree to the Terms & Conditions</span>
            </div>
            <p className="text-red-500 text-sm">{errors.terms?.message}</p>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => reset()}
                className="bg-yellow-500 text-white px-4 py-2 rounded"
              >
                Reset
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

