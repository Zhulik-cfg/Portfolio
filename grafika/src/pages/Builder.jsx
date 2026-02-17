import { useState, useRef } from 'react';

// Product configurations
const PRODUCTS = [
    { id: 'tshirt', name: 'Футболка', price: 350, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', colors: ['#ffffff', '#000000', '#1f2937', '#dc2626', '#2563eb'] },
    { id: 'hoodie', name: 'Худі', price: 850, image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', colors: ['#ffffff', '#000000', '#4b5563', '#9333ea'] },
    { id: 'mug', name: 'Горнятко', price: 200, image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', colors: ['#ffffff', '#000000'] },
];

const TABS = [
    { id: 'upload', label: 'Завантаження', icon: '📁' },
    { id: 'shapes', label: 'Фігури', icon: '🔺' },
    { id: 'text', label: 'Текст', icon: 'T' },
];

export default function Builder() {
    const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
    const [selectedColor, setSelectedColor] = useState(PRODUCTS[0].colors[0]);
    const [uploadedDesign, setUploadedDesign] = useState(null);
    const [activeTab, setActiveTab] = useState('upload');
    const fileInputRef = useRef(null);
    const canvasRef = useRef(null);

    // Drag & Drop State
    const [position, setPosition] = useState({ x: 50, y: 50 }); // Center percentages
    const [isDragging, setIsDragging] = useState(false);
    const dragStartRef = useRef({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
        dragStartRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e) => {
        if (!isDragging || !canvasRef.current) return;

        const rect = canvasRef.current.getBoundingClientRect();
        const deltaX = e.clientX - dragStartRef.current.x;
        const deltaY = e.clientY - dragStartRef.current.y;

        const deltaXPercent = (deltaX / rect.width) * 100;
        const deltaYPercent = (deltaY / rect.height) * 100;

        setPosition(prev => ({
            x: Math.min(100, Math.max(0, prev.x + deltaXPercent)),
            y: Math.min(100, Math.max(0, prev.y + deltaYPercent))
        }));

        dragStartRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleProductChange = (product) => {
        setSelectedProduct(product);
        setSelectedColor(product.colors[0]);
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setUploadedDesign(e.target.result);
                setPosition({ x: 50, y: 50 }); // Reset position
            };
            reader.readAsDataURL(file);
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    return (
        <div
            className="bg-[#F3F4F6] h-[calc(100vh-64px)] flex overflow-hidden font-sans"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            {/* 1. Dark Left Navigation Rail (Canva Style) */}
            <div className="w-[72px] bg-[#18191B] flex flex-col items-center py-4 z-20 flex-shrink-0">
                {TABS.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex flex-col items-center justify-center py-4 px-1 transition-colors group relative
                            ${activeTab === tab.id ? 'bg-[#252627] text-white' : 'text-gray-400 hover:text-gray-100 hover:bg-[#252627]'}`}
                    >
                        <span className="text-xl mb-1">{tab.icon}</span>
                        <span className="text-[10px] font-medium">{tab.label}</span>
                        {activeTab === tab.id && (
                            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-indigo-500" />
                        )}
                    </button>
                ))}
            </div>

            {/* Left Drawer - Content based on Tab */}
            <div className="w-80 bg-white border-r border-gray-200 flex flex-col z-0">
                <div className="p-6 border-b border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900">{TABS.find(t => t.id === activeTab)?.label}</h3>
                </div>

                <div className="p-6 flex-grow overflow-y-auto">
                    {activeTab === 'upload' && (
                        <div className="flex flex-col gap-4">
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleImageUpload}
                                accept="image/*"
                                className="hidden"
                            />
                            <button
                                onClick={triggerFileInput}
                                className="w-full py-3 px-4 rounded-xl border-2 border-dashed border-gray-300 hover:border-indigo-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all font-medium text-gray-500 flex items-center justify-center gap-2"
                            >
                                <span>+</span> Завантажити файл
                            </button>

                            {uploadedDesign && (
                                <div className="mt-4">
                                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Ваші файли</p>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="aspect-square rounded-lg border border-gray-200 overflow-hidden relative group cursor-pointer">
                                            <img src={uploadedDesign} alt="Upload" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                    {activeTab === 'shapes' && (
                        <div className="grid grid-cols-3 gap-3">
                            {/* Placeholder shapes */}
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="aspect-square bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer flex items-center justify-center text-gray-400">
                                    🔺
                                </div>
                            ))}
                        </div>
                    )}
                    {activeTab === 'text' && (
                        <div className="space-y-4">
                            <button className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 font-bold text-2xl font-sans">Заголовок</button>
                            <button className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 font-medium text-lg font-sans">Підзаголовок</button>
                            <button className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 font-normal text-sm font-sans">Основний текст</button>
                        </div>
                    )}
                </div>
            </div>

            {/* Center - Canvas */}
            <div className="flex-grow flex items-center justify-center p-10 bg-[#F3F4F6] relative overflow-hidden">
                <div
                    ref={canvasRef}
                    className="relative aspect-square h-[80vh] bg-white rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] flex items-center justify-center overflow-hidden ring-1 ring-black/5"
                >
                    <img
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        className="h-full w-full object-cover object-center pointer-events-none select-none"
                    />
                    {/* Design Overlay */}
                    {uploadedDesign && (
                        <div
                            className="absolute border-2 border-dashed border-indigo-400/50 flex items-center justify-center cursor-move group"
                            style={{
                                width: '30%',
                                height: '30%',
                                left: `${position.x}%`,
                                top: `${position.y}%`,
                                transform: 'translate(-50%, -50%)',
                            }}
                            onMouseDown={handleMouseDown}
                        >
                            <img
                                src={uploadedDesign}
                                alt="Uploaded Design"
                                className="max-w-full max-h-full object-contain filter drop-shadow-sm pointer-events-none"
                            />
                            {/* Resize Handle (Visual) */}
                            <div className="absolute bottom-[-6px] right-[-6px] w-4 h-4 bg-indigo-500 rounded-full border-2 border-white shadow-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    )}

                    {/* Color Overlay (Simulated) */}
                    <div className="absolute inset-0 bg-black mix-blend-overlay pointer-events-none opacity-0" style={{ backgroundColor: selectedColor, opacity: selectedColor === '#ffffff' ? 0 : 0.2 }} />
                </div>

                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg flex gap-4 text-sm font-medium text-gray-600">
                    <button className="hover:text-black">🔍 100%</button>
                    <button className="hover:text-black">↩️ Скасувати</button>
                </div>
            </div>

            {/* 4. Right Properties Panel */}
            <div className="w-[300px] bg-white border-l border-gray-200 flex flex-col z-10 flex-shrink-0">
                <div className="h-14 border-b border-gray-100 flex items-center justify-between px-6 bg-white">
                    <span className="font-bold text-gray-900">Властивості</span>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-8">
                    {/* Product Selection */}
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Товар</label>
                        <div className="grid grid-cols-3 gap-2">
                            {PRODUCTS.map((product) => (
                                <button
                                    key={product.id}
                                    onClick={() => handleProductChange(product)}
                                    className={`relative rounded-lg overflow-hidden border-2 transition-all aspect-square group
                                         ${selectedProduct.id === product.id ? 'border-indigo-600 ring-1 ring-indigo-600' : 'border-transparent hover:border-gray-300'}`}
                                >
                                    <img src={product.image} className="w-full h-full object-cover" />
                                    <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity ${selectedProduct.id === product.id ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`}>
                                        <span className="text-[10px] text-white font-medium text-center px-1">{product.name}</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                        <p className="mt-2 text-sm font-medium text-gray-900">{selectedProduct.name}</p>
                    </div>

                    {/* Color Selection */}
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Колір</label>
                        <div className="flex flex-wrap gap-3">
                            {selectedProduct.colors.map((color) => (
                                <button
                                    key={color}
                                    onClick={() => setSelectedColor(color)}
                                    className={`w-8 h-8 rounded-full border border-gray-200 shadow-sm transition-transform hover:scale-110 focus:outline-none
                                         ${selectedColor === color ? 'ring-2 ring-offset-2 ring-indigo-600 scale-110' : ''}`}
                                    style={{ backgroundColor: color }}
                                    title={color}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600">Ціна товару</span>
                            <span className="font-medium text-gray-900">{selectedProduct.price} грн</span>
                        </div>
                        {uploadedDesign && (
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-gray-600">Друк (А4)</span>
                                <span className="font-medium text-gray-900">150 грн</span>
                            </div>
                        )}
                        <div className="flex justify-between items-center mt-4 pt-4 border-t border-dashed border-gray-200">
                            <span className="text-lg font-bold text-gray-900">Всього</span>
                            <span className="text-xl font-bold text-indigo-600">{uploadedDesign ? selectedProduct.price + 150 : selectedProduct.price} грн</span>
                        </div>
                    </div>
                </div>

                <div className="p-6 border-t border-gray-100 bg-white">
                    <button className="w-full bg-[#111111] text-white h-12 rounded-xl font-bold hover:bg-black hover:shadow-lg hover:-translate-y-0.5 transition-all active:translate-y-0 active:shadow-md">
                        Додати в кошик
                    </button>
                </div>
            </div>
        </div>
    );
}
