import { useReducer } from "react"
import { submitToSheet, type EnrollmentData } from "../hooks/useGoogleSheet"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

// ── Types ──────────────────────────────────────────────────────────────────

type InterestedCourse =
    | "oLevel" | "dca" | "pgdca" | "ccc" | "advancedExcel"
    | "oracle" | "python" | "java" | "tally"
    | "englishSpeaking" | "graphicDesigning" | "dataAnalytics"

interface IState {
    name: string
    email: string
    contact: string
    interestedCourse: InterestedCourse | ""
    errors: Partial<Record<"name" | "email" | "contact" | "interestedCourse", string>>
    status: "idle" | "submitting" | "success" | "error"
}

type IAction =
    | { type: "SET_NAME"; payload: string }
    | { type: "SET_EMAIL"; payload: string }
    | { type: "SET_CONTACT"; payload: string }
    | { type: "SET_COURSE"; payload: InterestedCourse | "" }
    | { type: "VALIDATE" }
    | { type: "SUBMIT_START" }
    | { type: "SUBMIT_SUCCESS" }
    | { type: "SUBMIT_ERROR" }
    | { type: "RESET" }

// ── Validation ─────────────────────────────────────────────────────────────

function validate(s: IState): IState["errors"] {
    const e: IState["errors"] = {}
    if (!s.name.trim()) e.name = "Name is required"
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.email)) e.email = "Valid email chahiye"
    if (!/^\d{10}$/.test(s.contact)) e.contact = "10 digit number chahiye"
    if (!s.interestedCourse) e.interestedCourse = "Course select karo"
    return e
}

// ── Reducer ────────────────────────────────────────────────────────────────

const initial: IState = {
    name: "", email: "", contact: "", interestedCourse: "",
    errors: {}, status: "idle",
}

function reducer(state: IState, action: IAction): IState {
    switch (action.type) {
        case "SET_NAME":
            return { ...state, name: action.payload, errors: { ...state.errors, name: undefined } }
        case "SET_EMAIL":
            return { ...state, email: action.payload, errors: { ...state.errors, email: undefined } }
        case "SET_CONTACT":
            return { ...state, contact: action.payload.replace(/\D/g, "").slice(0, 10), errors: { ...state.errors, contact: undefined } }
        case "SET_COURSE":
            return { ...state, interestedCourse: action.payload, errors: { ...state.errors, interestedCourse: undefined } }
        case "VALIDATE":
            return { ...state, errors: validate(state) }
        case "SUBMIT_START":
            return { ...state, status: "submitting", errors: {} }
        case "SUBMIT_SUCCESS":
            return { ...state, status: "success" }
        case "SUBMIT_ERROR":
            return { ...state, status: "error" }
        case "RESET":
            return { ...initial }
        default:
            return state
    }
}

// ── Courses ────────────────────────────────────────────────────────────────

const COURSES: { value: InterestedCourse; label: string }[] = [
    { value: "oLevel", label: "O Level" },
    { value: "dca", label: "DCA — Diploma in Computer Applications" },
    { value: "pgdca", label: "PGDCA — Post Graduate DCA" },
    { value: "ccc", label: "CCC — Course on Computer Concepts" },
    { value: "advancedExcel", label: "Advanced Excel" },
    { value: "oracle", label: "Oracle Database" },
    { value: "python", label: "Python Programming" },
    { value: "java", label: "Java Programming" },
    { value: "tally", label: "Tally with GST" },
    { value: "englishSpeaking", label: "English Speaking" },
    { value: "graphicDesigning", label: "Graphic Designing" },
    { value: "dataAnalytics", label: "Data Analytics" },
]

// ── Props ──────────────────────────────────────────────────────────────────

interface Props {
    open: boolean
    onClose: () => void
}

// ── Component ──────────────────────────────────────────────────────────────

export default function EnrollmentForm({ open, onClose }: Props) {
    const [state, dispatch] = useReducer(reducer, initial)

    const handleSubmit = async () => {
        const errors = validate(state)
        if (Object.keys(errors).length > 0) {
            dispatch({ type: "VALIDATE" })
            return
        }

        dispatch({ type: "SUBMIT_START" })
        try {
            await submitToSheet({
                name: state.name,
                email: state.email,
                contact: state.contact,
                interestedCourse: state.interestedCourse as string,
            } as EnrollmentData)
            dispatch({ type: "SUBMIT_SUCCESS" })
        } catch {
            dispatch({ type: "SUBMIT_ERROR" })
        }
    }

    const handleClose = () => {
        dispatch({ type: "RESET" })
        onClose()
    }

    // ── Success ──────────────────────────────────────────────────────────────

    if (state.status === "success") {
        return (
            <Dialog open={open} onOpenChange={handleClose}>
                <DialogContent className="sm:max-w-md text-center">
                    <div className="flex flex-col items-center gap-4 py-6">
                        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-3xl font-bold">
                            ✓
                        </div>
                        <h2 className="text-xl font-bold">Application Submitted!</h2>
                        <p className="text-muted-foreground text-sm">
                            Thanks <strong>{state.name}</strong>, we'll contact you soon on{" "}
                            <strong>{state.contact}</strong>.
                        </p>
                        <Button onClick={handleClose} className="mt-2 w-full">Done</Button>
                    </div>
                </DialogContent>
            </Dialog>
        )
    }

    // ── Form ─────────────────────────────────────────────────────────────────

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                        Admissions Open
                    </p>
                    <DialogTitle className="text-2xl font-bold">Enroll Now</DialogTitle>
                </DialogHeader>

                <div className="flex flex-col gap-4 mt-2">

                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                            id="name"
                            placeholder="Rajan Sharma"
                            value={state.name}
                            onChange={e => dispatch({ type: "SET_NAME", payload: e.target.value })}
                            className={state.errors.name ? "border-red-500" : ""}
                        />
                        {state.errors.name && <p className="text-red-500 text-xs">{state.errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="rajan@example.com"
                            value={state.email}
                            onChange={e => dispatch({ type: "SET_EMAIL", payload: e.target.value })}
                            className={state.errors.email ? "border-red-500" : ""}
                        />
                        {state.errors.email && <p className="text-red-500 text-xs">{state.errors.email}</p>}
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col gap-1.5">
                        <Label htmlFor="contact">Mobile Number</Label>
                        <Input
                            id="contact"
                            type="tel"
                            placeholder="10-digit number"
                            value={state.contact}
                            onChange={e => dispatch({ type: "SET_CONTACT", payload: e.target.value })}
                            className={state.errors.contact ? "border-red-500" : ""}
                        />
                        {state.errors.contact && <p className="text-red-500 text-xs">{state.errors.contact}</p>}
                    </div>

                    {/* Course */}
                    <div className="flex flex-col gap-1.5">
                        <Label>Interested Course</Label>
                        <Select
                            value={state.interestedCourse}
                            onValueChange={val => dispatch({ type: "SET_COURSE", payload: val as InterestedCourse })}
                        >
                            <SelectTrigger className={state.errors.interestedCourse ? "border-red-500" : ""}>
                                <SelectValue placeholder="— Select a course —" />
                            </SelectTrigger>
                            <SelectContent>
                                {COURSES.map(c => (
                                    <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {state.errors.interestedCourse && (
                            <p className="text-red-500 text-xs">{state.errors.interestedCourse}</p>
                        )}
                    </div>

                    {/* Server error */}
                    {state.status === "error" && (
                        <p className="text-red-500 text-sm text-center">
                            Something went wrong. Please try again.
                        </p>
                    )}

                    {/* Buttons */}
                    <div className="flex gap-3 mt-2">
                        <Button variant="outline" className="flex-1" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button
                            className="flex-1"
                            onClick={handleSubmit}
                            disabled={state.status === "submitting"}
                        >
                            {state.status === "submitting" ? "Submitting…" : "Submit Application"}
                        </Button>
                    </div>

                </div>
            </DialogContent>
        </Dialog>
    )
}