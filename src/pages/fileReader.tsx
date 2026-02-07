const fileReader = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader: FileReader = new FileReader(); // 显式使用 FileReader
    reader.readAsDataURL(file);

    reader.onload = () => {
      const img = new Image();
      img.src = reader.result as string; // 明确类型转换
      document.body.appendChild(img); // reader.result为获取结果
    };
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
    </div>
  );
};

export default fileReader;
