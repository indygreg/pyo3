initSidebarItems({"attr":[["pyclass",""],["pyfunction",""],["pymethods",""],["pymodule","Internally, this proc macro create a new c function called `PyInit_{my_module}` that then calls the init function you provided"],["pyproto",""]],"struct":[["GILGuard","RAII type that represents the Global Interpreter Lock acquisition."],["Py","Safe wrapper around unsafe `*mut ffi::PyObject` pointer with specified type information."],["PyErr","Represents a Python exception that was raised."],["PyModule","Represents a Python `module` object."],["PyObject","A python object"],["PyRef","A special reference of type `T`. `PyRef<T>` refers a instance of T, which exists in the Python heap as a part of a Python object."],["PyRefMut","Mutable version of `PyRef`. # Example `use pyo3::prelude::*; use pyo3::types::IntoPyDict; #[pyclass] struct Point {     x: i32,     y: i32, } #[pymethods] impl Point {     fn length(&self) -> i32 {         self.x * self.y     } } let gil = Python::acquire_gil(); let py = gil.python(); let mut obj = PyRefMut::new(gil.python(), Point { x: 3, y: 4 }).unwrap(); let d = vec![(\"p\", obj.to_object(py))].into_py_dict(py); obj.x = 5; obj.y = 20; py.run(\"assert p.length() == 100\", None, Some(d)).unwrap();`"],["Python","Marker type that indicates that the GIL is currently held."]],"trait":[["AsPyRef","Trait implements object reference extraction from python managed pointer."],["FromPy","Similar to [std::convert::From], just that it requires a gil token."],["FromPyObject","`FromPyObject` is implemented by various types that can be extracted from a Python object reference."],["IntoPy","Similar to [std::convert::Into], just that it requires a gil token."],["IntoPyPointer","This trait allows retrieving the underlying FFI pointer from Python objects."],["ObjectProtocol","Python object model helper methods"],["PyTryFrom","Trait implemented by Python object types that allow a checked downcast. This trait is similar to `std::convert::TryFrom`"],["PyTryInto","Trait implemented by Python object types that allow a checked downcast. This trait is similar to `std::convert::TryInto`"],["ToPyObject","Conversion trait that allows various objects to be converted into `PyObject`"]],"type":[["PyResult","Represents the result of a Python call."]]});