# backend/utils.py
import torch
from torchvision import transforms
from PIL import Image
from model import SatelliteImageClassifier

CLASS_LIST = ['water', 'cloudy', 'desert', 'green_area']
DEVICE = torch.device("cuda" if torch.cuda.is_available() else "cpu")

model = SatelliteImageClassifier(num_classes=4)
model.load_state_dict(torch.load("satellite_classifier.pth", map_location=DEVICE))
model.to(DEVICE)
model.eval()

transform = transforms.Compose([
    transforms.Resize((124, 124)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406],
                         std=[0.229, 0.224, 0.225])
])

def predict_image(image: Image.Image):
    image = transform(image).unsqueeze(0).to(DEVICE)

    with torch.no_grad():
        output = model(image)
        probs = torch.softmax(output, dim=1)
        confidence, predicted = torch.max(probs, 1)

    return CLASS_LIST[predicted.item()], float(confidence.item())
